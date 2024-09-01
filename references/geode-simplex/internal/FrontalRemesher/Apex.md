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

# struct Apex


## Members

```cpp
public Point<dimension> point

```

```cpp
public index_t polygon_id

```

```cpp
public optional macro_edge_id

```

```cpp
public double length

```

```cpp
public double min_length

```

```cpp
public Point<dimension> min_point

```



## Functions

### Apex

```cpp
public void Apex(Point<dimension> point_in, index_t polygon_id_in, double length_in, double min_length_in, Point<dimension> min_point_in)
```


### Apex

```cpp
public void Apex(Point<dimension> point_in, index_t polygon_id_in, index_t macro_edge_id_in, double length_in, double min_length_in, Point<dimension> min_point_in)
```




