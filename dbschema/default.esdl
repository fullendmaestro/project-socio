using extension auth;

module default {
    # User Schema with EdgeDB Auth integration
    scalar type Role extending enum<admin, user>;

  global current_user := (
    assert_single((
      select User
      filter .identity = global ext::auth::ClientTokenIdentity
    ))
  );

  type User {
    required identity: ext::auth::Identity {
      constraint exclusive;
    };
    multi link projects -> Project;
    required name: str;
    email: str;
  
    userRole: Role {
      default := "user";
    };

    created: datetime {
      rewrite insert using (datetime_of_statement());
    }
    updated: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    }
  }


    # Project Schema
    type Project {
        required property name -> str;
        property description -> str;
        required property created_at -> datetime {
            default := (SELECT datetime_current());
        }
        required link owner -> User;
        multi link collaborators -> User;
        multi link tasks -> Task;
        multi link tags -> Tag;
        multi link discussions -> Discussion;
        multi link rewards -> Reward;

        # Constraint to ensure a project has a maximum of 3 tags
        # constraint max_tags := (SELECT count(.tags) <= 3);
    }

    # Task Schema
    type Task {
        required property title -> str;
        property description -> str;
        required property created_at -> datetime {
            default := (SELECT datetime_current());
        }
        property due_date -> datetime;
        required link project -> Project;
        multi link subtasks -> Subtask;
        multi link rewards -> Reward;
    }

    # Subtask Schema
    type Subtask {
        required property title -> str;
        property description -> str;
        required property created_at -> datetime {
            default := (SELECT datetime_current());
        }
        property due_date -> datetime;
        required link task -> Task;
    }

    # Collaborator Schema (manages many-to-many relationships between projects and users)
    type Collaborator {
        required link project -> Project;
        required link user -> User;
    }

    # Discussion Schema
    type Discussion {
        required property content -> str;
        required property created_at -> datetime {
            default := (SELECT datetime_current());
        }
        required link project -> Project;
        required link user -> User;
    }

    # Reward Schema
    type Reward {
        required property title -> str;
        property description -> str;
        required property created_at -> datetime {
            default := (SELECT datetime_current());
        }
        link project -> Project;
        link task -> Task;
    }

    # Tag Schema
    type Tag {
        required property name -> str {
            constraint exclusive;
        }
    }
}
