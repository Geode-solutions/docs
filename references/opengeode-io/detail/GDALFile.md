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

# class GDALFile


## Functions

### GDALFile

```cpp
public void GDALFile(basic_string_view filename)
```


### ~GDALFile

```cpp
public void ~GDALFile()
```


### read_coordinate_system

```cpp
public CoordinateSystem read_coordinate_system()
```


### is_coordinate_system_loadable

```cpp
public bool is_coordinate_system_loadable()
```


### additional_files

```cpp
public AdditionalFiles additional_files()
```


### dataset

```cpp
public GDALDataset & dataset()
```




