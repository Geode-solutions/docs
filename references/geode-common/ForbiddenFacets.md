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

# class ForbiddenFacets


## Functions

### ForbiddenFacets

```cpp
public void ForbiddenFacets(const ForbiddenFacets & )
```


### operator=

```cpp
public ForbiddenFacets & operator=(const ForbiddenFacets & )
```


### ForbiddenFacets

```cpp
public void ForbiddenFacets(ForbiddenFacets && )
```


### operator=

```cpp
public ForbiddenFacets & operator=(ForbiddenFacets && )
```


### ForbiddenFacets

```cpp
public void ForbiddenFacets()
```


### ~ForbiddenFacets

```cpp
public void ~ForbiddenFacets()
```


### is_forbidden

```cpp
public bool is_forbidden(const PolyhedronFacetVertices & facet_vertices)
```


### add

```cpp
public void add(const PolyhedronFacetVertices & facet_vertices)
```




