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

# class UnzipFile


## Functions

### UnzipFile

```cpp
public void UnzipFile(string_view file, string_view unarchive_temp_filename)
```


### ~UnzipFile

```cpp
public void ~UnzipFile()
```


### extract_all

```cpp
public void extract_all()
```


### directory

```cpp
public basic_string directory()
```




