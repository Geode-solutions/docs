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

# class OpenGeodeBRepOutput


```cpp
Inherits from BRepOutput
```



## Functions

### OpenGeodeBRepOutput

```cpp
public void OpenGeodeBRepOutput(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### archive_brep_files

```cpp
public void archive_brep_files(const ZipFile & zip_writer)
```


### save_brep_files

```cpp
public void save_brep_files(const BRep & brep, basic_string_view directory)
```


### write

```cpp
public vector write(const BRep & brep)
```




