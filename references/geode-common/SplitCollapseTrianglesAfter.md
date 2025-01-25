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

# struct SplitCollapseTrianglesAfter


```cpp
Inherits from SwapTrianglesAfter<dimension>
```



## Members

```cpp
public absl::FixedArray<ModifiedTriangle<dimension> > modified

```



## Functions

### SplitCollapseTrianglesAfter

```cpp
public void SplitCollapseTrianglesAfter<dimension>(SwapTrianglesAfter<dimension> && swap_triangles_after, size_t nb_modified_triangles)
```


### SplitCollapseTrianglesAfter

```cpp
public void SplitCollapseTrianglesAfter<dimension>(size_t nb_new_triangles, size_t nb_old_triangles, size_t nb_modified_triangles)
```


### SplitCollapseTrianglesAfter

```cpp
public void SplitCollapseTrianglesAfter<dimension>(const SplitCollapseTrianglesAfter<dimension> & other)
```


### SplitCollapseTrianglesAfter

```cpp
public void SplitCollapseTrianglesAfter<dimension>(SplitCollapseTrianglesAfter<dimension> && other)
```


### operator=

```cpp
public SplitCollapseTrianglesAfter<dimension> & operator=(const SplitCollapseTrianglesAfter<dimension> & other)
```


### operator=

```cpp
public SplitCollapseTrianglesAfter<dimension> & operator=(SplitCollapseTrianglesAfter<dimension> && other)
```




