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

# class OpenGeodeTetrahedralSolidInput


```cpp
Inherits from TetrahedralSolidInput<dimension>
```



## Functions

### OpenGeodeTetrahedralSolidInput

```cpp
public void OpenGeodeTetrahedralSolidInput<dimension>(basic_string_view filename)
```


### additional_files

```cpp
public typename TetrahedralSolidInput<dimension>::AdditionalFiles additional_files()
```


### read

```cpp
public std::unique_ptr<TetrahedralSolid<dimension> > read(const MeshImpl & impl)
```




