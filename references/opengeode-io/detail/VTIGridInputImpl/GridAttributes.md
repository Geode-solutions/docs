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

# struct GridAttributes


## Members

```cpp
public Point<dimension> origin

```

```cpp
public std::array<index_t, dimension> cells_number

```

```cpp
public std::array<double, dimension> cells_length

```

```cpp
public std::array<Vector<dimension>, dimension> cell_directions

```



## Functions

### GridAttributes

```cpp
public void GridAttributes()
```




