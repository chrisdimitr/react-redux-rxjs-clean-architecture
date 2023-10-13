import { Clear, Search } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";

import styles from "./SearchInput.module.scss";
import { SearchInputModel } from "./SearchInputModel.ts";

SearchInput.defaultProps = {
  onChange: () => undefined,
  debounceDelay: 0,
  showSearchIcon: true,
  showClearIcon: true,
  placeholder: "Search...",
  autocompleteOptions: [],
  style: {}
};

function SearchInput({
  onChange,
  debounceDelay,
  showSearchIcon,
  showClearIcon,
  placeholder,
  autocompleteOptions,
  style
}: SearchInputModel) {
  const [inputValue, setInputValue] = useState("");
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const [autocompleteOptionsFiltered, setAutocompleteOptionsFiltered] = useState<string[]>([]);

  const autocompleteListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteListRef.current && !autocompleteListRef.current.contains(event.target as Node)) {
        setAutocompleteOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(inputValue);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [inputValue, onChange, debounceDelay]);

  const handleInputChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setInputValue(value);

    if (autocompleteOptions.length > 0) {
      const filteredOptions = autocompleteOptions.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filteredOptions);

      setAutocompleteOptionsFiltered(filteredOptions);
      setAutocompleteOpen(true);
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setAutocompleteOpen(false);
    onChange(option);
  };

  const handleClearClick = () => {
    setInputValue("");
    onChange("");
  };

  return (
    <div className={styles["search-container"]} style={style}>
      <TextField
        sx={{
          "& fieldset": {
            paddingLeft: (theme) => theme.spacing(2.5),
            borderRadius: "30px"
          }
        }}
        fullWidth={true}
        placeholder={placeholder}
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: showSearchIcon ? (
            <IconButton disabled>
              <Search />
            </IconButton>
          ) : (
            <></>
          ),
          endAdornment: showClearIcon ? (
            <>
              {inputValue && (
                <IconButton edge="end" onClick={handleClearClick}>
                  <Clear />
                </IconButton>
              )}
            </>
          ) : (
            <></>
          )
        }}
      />
      {autocompleteOpen && autocompleteOptionsFiltered?.length > 0 && (
        <ul ref={autocompleteListRef} className={styles["search-autocomplete-container"]}>
          {autocompleteOptionsFiltered?.map((option, index) => (
            <li
              key={index}
              className={styles["search-autocomplete-item"]}
              onClick={() => handleOptionClick(option)}
              style={{ cursor: "pointer", padding: "8px" }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
