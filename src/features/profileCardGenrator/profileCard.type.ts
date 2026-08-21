export interface DummyProfileInterface {
  id: number;
  name: string;
  username: string;
  email: string;

  phone: string;

  company: {
    name: string;
    catchPhrase: string;
  };
}

export type CreateProfile = Omit<DummyProfileInterface, "id">;
