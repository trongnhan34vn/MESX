import { ReactNode } from 'react';

export type AuthFieldElement = {
  type: string
  field: "email" | "password",
  icon: ReactNode,
  name: string
}

export type AuthFieldValue = {
  username: string,
  password: string
}

export type UserSignIn = {
  email: string,
  password: string
}