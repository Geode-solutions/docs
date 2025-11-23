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

# class OpenGeodePolyhedralSolidOutput


```cpp
Inherits from PolyhedralSolidOutput<dimension>
```



## Functions

### OpenGeodePolyhedralSolidOutput

```cpp
public void OpenGeodePolyhedralSolidOutput<dimension>(basic_string_view filename)
```


### is_saveable

```cpp
public bool is_saveable(const PolyhedralSolid<dimension> & mesh)
```


### write

```cpp
public vector write(const PolyhedralSolid<dimension> & mesh)
```




