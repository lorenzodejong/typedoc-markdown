import {
  DeclarationReflection,
  ParameterReflection,
  ProjectReflection,
  ReferenceReflection,
  SignatureReflection,
  TypeParameterReflection,
} from "typedoc";

export interface ComponentRenderContext {
  project: ProjectReflection;
}

export type SomeReflection =
  | DeclarationReflection
  | ParameterReflection
  | ProjectReflection
  | ReferenceReflection
  | SignatureReflection
  | TypeParameterReflection;
