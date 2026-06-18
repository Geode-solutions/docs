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

### archive_brep_files

```cpp
public void archive_brep_files(const ZipFile & zip_writer)
```


### OpenGeodeBRepOutput

```cpp
public void OpenGeodeBRepOutput(std::string_view filename)
```


### extension

```cpp
public static std::string_view extension()
```


### save_brep_files

```cpp
public void save_brep_files(const BRep & brep, std::string_view directory)
```


### write

```cpp
public std::vector<std::string> write(const BRep & brep)
```




