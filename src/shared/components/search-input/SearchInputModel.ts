export interface SearchInputModel {
  onChange: (value: string | undefined) => void | undefined;
  debounceDelay: number;
  showSearchIcon: boolean;
  showClearIcon: boolean;
  placeholder: string;
  autocompleteOptions: string[];
  style: React.CSSProperties;
}
