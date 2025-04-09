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

# class TrianglesModifier


## Functions

### TrianglesModifier

```cpp
public void TrianglesModifier(const TrianglesModifier & )
```


### operator=

```cpp
public TrianglesModifier & operator=(const TrianglesModifier & )
```


### ~TrianglesModifier

```cpp
public void ~TrianglesModifier()
```


### updated_triangle

```cpp
public const SmallSet<index_t> & updated_triangle(index_t triangle_id)
```


### set_updated_triangle

```cpp
public void set_updated_triangle(const TriangleMapping & mapping)
```


### TrianglesModifier

```cpp
protected void TrianglesModifier()
```


### TrianglesModifier

```cpp
protected void TrianglesModifier(TrianglesModifier && other)
```


### operator=

```cpp
protected TrianglesModifier & operator=(TrianglesModifier && other)
```


### clean_triangles_modifier

```cpp
protected void clean_triangles_modifier()
```




