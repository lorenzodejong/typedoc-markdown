import {
  DeclarationReflection,
  ParameterReflection,
  ProjectReflection,
  ReferenceReflection,
  Reflection,
  SignatureReflection,
  TypeParameterReflection,
  UrlMapping,
} from "typedoc";

export type SomeReflection =
  | DeclarationReflection
  | ParameterReflection
  | ProjectReflection
  | ReferenceReflection
  | SignatureReflection
  | TypeParameterReflection;

export interface ComponentRenderContext {
  getUrlMappingForModel: (
    model: SomeReflection
  ) => UrlMapping<Reflection> | null;
}
