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

# struct TrianglesAfter


## Members

```cpp
public absl::FixedArray<ModifiedTriangle<dimension> > modified

```



## Functions

### TrianglesAfter

```cpp
public void TrianglesAfter<dimension>(size_t nb_modified_triangles)
```


### TrianglesAfter

```cpp
public void TrianglesAfter<dimension>(size_t nb_modified_triangles, const Triangle<dimension> & base_triangle)
```




