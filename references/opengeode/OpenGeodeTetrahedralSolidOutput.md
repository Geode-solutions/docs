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

# class OpenGeodeTetrahedralSolidOutput


```cpp
Inherits from TetrahedralSolidOutput<dimension>
```



## Functions

### OpenGeodeTetrahedralSolidOutput

```cpp
public void OpenGeodeTetrahedralSolidOutput<dimension>(basic_string_view filename)
```


### is_saveable

```cpp
public bool is_saveable(const TetrahedralSolid<dimension> & mesh)
```


### write

```cpp
public vector write(const TetrahedralSolid<dimension> & mesh)
```




