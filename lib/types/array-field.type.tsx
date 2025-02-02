import * as Yup from "yup";

import {
  ArrayFieldAddButton,
  ArrayFieldRemoveButton,
} from "./array-field-action-button.type";

import { FieldBase } from "./field-base.type";
import { LabelOptions } from "./label-options.type";

export class ArrayField<ValueType = { [key: string]: any }> {
  fieldType?: string = "fieldArray";
  id!: string;
  fields: Array<FieldBase<any>>;
  addButtonOptions?: ArrayFieldAddButton;
  removeButtonOptions?: ArrayFieldRemoveButton;
  defaultValues?: Array<ValueType>;
  label?: string;
  labelOptions?: LabelOptions;
  validate?: Yup.ArraySchema<any, any>;

  constructor(options: ArrayField<ValueType>) {
    this.id = options.id;
    this.fields = options.fields ?? [];
    this.addButtonOptions = options.addButtonOptions ?? {};
    this.removeButtonOptions = options.removeButtonOptions ?? {};
    this.defaultValues = options.defaultValues ?? [];
    this.label = options.label;
    this.labelOptions = options.labelOptions ?? {};
    this.validate = options.validate ?? Yup.array();
  }
}
