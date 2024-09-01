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

# class OpenGeodeHorizonsStackInput


```cpp
Inherits from HorizonsStackInput<3U>
```



# class OpenGeodeHorizonsStackInput


```cpp
Inherits from HorizonsStackInput<dimension>
```



## Functions

### OpenGeodeHorizonsStackInput

```cpp
public void OpenGeodeHorizonsStackInput<dimension>(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### load_horizons_stack_files

```cpp
public void load_horizons_stack_files(HorizonsStack<dimension> & horizons_stack, basic_string_view directory)
```


### read

```cpp
public HorizonsStack<dimension> read()
```




# class OpenGeodeHorizonsStackInput


```cpp
Inherits from HorizonsStackInput<2U>
```



