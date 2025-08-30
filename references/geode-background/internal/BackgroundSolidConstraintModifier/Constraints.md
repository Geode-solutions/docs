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

# struct Constraints


## Members

```cpp
public vector immuable_vertices

```

```cpp
public ForbiddenEdges forbidden_edges

```

```cpp
public ForbiddenFacets forbidden_facets

```

```cpp
public vector forbidden_positions

```



## Functions

### Constraints

```cpp
public void Constraints()
```


### Constraints

```cpp
public void Constraints(Constraints && )
```


### operator=

```cpp
public Constraints & operator=(Constraints && )
```


### ~Constraints

```cpp
public void ~Constraints()
```


### is_immuable

```cpp
public bool is_immuable(index_t vertex, const VerticesModifier & vertices_modifier)
```


### add_constraints

```cpp
public void add_constraints(const Constraints & constraints)
```


### is_position_forbidden

```cpp
public bool is_position_forbidden(const Point3D & query)
```


### clean_forbidden

```cpp
public void clean_forbidden()
```




