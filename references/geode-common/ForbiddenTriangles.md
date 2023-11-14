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

# class ForbiddenTriangles


## Functions

### ForbiddenTriangles

```cpp
public void ForbiddenTriangles(const ForbiddenTriangles & )
```


### operator=

```cpp
public ForbiddenTriangles & operator=(const ForbiddenTriangles & )
```


### ForbiddenTriangles

```cpp
public void ForbiddenTriangles(ForbiddenTriangles && )
```


### operator=

```cpp
public ForbiddenTriangles & operator=(ForbiddenTriangles && )
```


### ForbiddenTriangles

```cpp
public void ForbiddenTriangles()
```


### ~ForbiddenTriangles

```cpp
public void ~ForbiddenTriangles()
```


### is_forbidden

```cpp
public bool is_forbidden(const std::array<index_t, 3> & triangle_vertices)
```


### add

```cpp
public void add(const std::array<index_t, 3> & triangle_vertices)
```




