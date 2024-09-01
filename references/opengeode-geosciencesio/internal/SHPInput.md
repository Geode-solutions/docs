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

# class SHPInput


```cpp
Inherits from SectionInput
```



## Functions

### SHPInput

```cpp
public void SHPInput(basic_string_view filename)
```


### extensions

```cpp
public vector extensions()
```


### read

```cpp
public Section read()
```


### check_missing_files

```cpp
public MissingFiles check_missing_files()
```




