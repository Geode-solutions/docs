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

# struct OrientedEdgeVertices


## Members

```cpp
public index_t vertex_from

```

```cpp
public index_t vertex_to

```



## Functions

### OrientedEdgeVertices

```cpp
public void OrientedEdgeVertices()
```


### OrientedEdgeVertices

```cpp
public void OrientedEdgeVertices(const OrientedEdgeVertices & )
```


### operator=

```cpp
public OrientedEdgeVertices & operator=(const OrientedEdgeVertices & )
```


### OrientedEdgeVertices

```cpp
public void OrientedEdgeVertices(OrientedEdgeVertices && )
```


### operator=

```cpp
public OrientedEdgeVertices & operator=(OrientedEdgeVertices && )
```


### ~OrientedEdgeVertices

```cpp
public void ~OrientedEdgeVertices()
```


### opposite

```cpp
public OrientedEdgeVertices opposite()
```


### updated

```cpp
public OrientedEdgeVertices updated(const VerticesModifier & modifier)
```


### string

```cpp
public basic_string string()
```




