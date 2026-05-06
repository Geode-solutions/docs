<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class CsvInputHelpers


## Functions

### CsvInputHelpers

```cpp
public void CsvInputHelpers(basic_string_view filename)
```


### CsvInputHelpers

```cpp
public void CsvInputHelpers(CsvInputHelpers && other)
```


### ~CsvInputHelpers

```cpp
public void ~CsvInputHelpers()
```


### set_separator

```cpp
public void set_separator(char separator)
```


### set_x_column

```cpp
public void set_x_column(index_t x_column)
```


### set_y_column

```cpp
public void set_y_column(index_t y_column)
```


### set_z_column

```cpp
public void set_z_column(index_t z_column)
```


### set_header_row

```cpp
public void set_header_row(index_t header_row)
```


### set_first_row

```cpp
public void set_first_row(index_t first_row)
```


### create_point_set

```cpp
public unique_ptr create_point_set()
```




