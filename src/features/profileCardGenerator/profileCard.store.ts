import { create } from "zustand";
import type { DummyProfileInterface } from "./profileCard.type";
import { persist } from "zustand/middleware";

const dummyProfile: DummyProfileInterface[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",

    phone: "9876543210",

    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",

    phone: "9876543210",

    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",

    phone: "9876543210",

    company: {
      name: "Robel-Corkery",
      catchPhrase: "Face to face bifurcated interface",
    },
  },
  {
    id: 4,
    name: "Clementine Bauch",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",

    phone: "9876543210",

    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",

    phone: "9876543210",

    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",

    phone: "9876543210",

    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",

    phone: "9876543210",

    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",

    phone: "9876543210",

    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",

    phone: "9876543210",

    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",

    phone: "9876543210",

    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
    },
  },
];

interface ProfileStoreState {
  profiles: DummyProfileInterface[];
  addProfile: (profile: DummyProfileInterface) => void;
  removeProfile: (id: number) => void;
  updateProfile: (id: number, profile: DummyProfileInterface) => void;
}

export const useProfileStore = create<ProfileStoreState>()(
  persist(
    (set) => ({
      profiles: dummyProfile,

      addProfile: (profile) =>
        set((state) => ({
          profiles: [...state.profiles, profile],
        })),

      removeProfile: (id) =>
        set((state) => ({
          profiles: state.profiles.filter((profile) => profile.id !== id),
        })),

      updateProfile: (id, updatedProfile) =>
        set((state) => ({
          profiles: state.profiles.map((profile) => (profile.id === id ? updatedProfile : profile)),
        })),
    }),
    {
      name: "profile-storage",
    },
  ),
);
