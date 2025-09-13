import { type ReactNode, type Dispatch, type SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface EmployeeData {
  name: string | undefined;
  surname: string | undefined;
  age: string | undefined;
  job: string | undefined;
}

export interface EmployeeDataContext {
  employeeData: EmployeeData | undefined;
  setEmployeeData: Dispatch<SetStateAction<EmployeeData | undefined>>;
}