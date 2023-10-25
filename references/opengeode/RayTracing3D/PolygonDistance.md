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

# struct PolygonDistance


## Members

```cpp
public index_t polygon

```

```cpp
public double distance

```

```cpp
public Position position

```

```cpp
public Point point

```



## Functions

### PolygonDistance

```cpp
public void PolygonDistance()
```


### PolygonDistance

```cpp
public void PolygonDistance(index_t polygon_in, double distance_in, Position position_in, Point point_in)
```


### operator<

```cpp
public bool operator<(const PolygonDistance & other)
```




