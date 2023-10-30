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

# struct MacroEdge


## Members

```cpp
public array values

```

```cpp
public Point<dimension> p0

```

```cpp
public Point<dimension> p1

```

```cpp
public double length

```

```cpp
public double metric

```

```cpp
public double target

```

```cpp
public BorderType border_type

```

```cpp
public index_t id

```

```cpp
public index_t apex

```



## Functions

### MacroEdge

```cpp
public void MacroEdge(const FrontalRemesher<> & remesher, index_t v0, index_t v1, BorderType border_type_in)
```


### operator<

```cpp
public bool operator<(const MacroEdge & rhs)
```


### update

```cpp
public void update(VerticesModifier & modifier)
```




## Enums

| enum BorderType |

--

| BORDER |
| NO_BORDER |





