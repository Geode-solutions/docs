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

# struct CommonConstraints


## Members

```cpp
public BORDER_CONSTRAINT border

```

```cpp
public ImmuableVertices immuable_vertices

```

```cpp
public ImmuableEdges immuable_edges

```

```cpp
public ForbiddenEdges forbidden_edges

```



## Functions

### CommonConstraints

```cpp
public void CommonConstraints(BORDER_CONSTRAINT border_constraint)
```


### CommonConstraints

```cpp
public void CommonConstraints(CommonConstraints && )
```


### operator=

```cpp
public CommonConstraints & operator=(CommonConstraints && )
```


### ~CommonConstraints

```cpp
public void ~CommonConstraints()
```


### add_constraints

```cpp
public void add_constraints(const CommonConstraints & constraints)
```




