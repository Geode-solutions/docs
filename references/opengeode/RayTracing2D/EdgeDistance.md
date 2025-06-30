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

# struct EdgeDistance


## Members

```cpp
public index_t edge

```

```cpp
public double distance

```

```cpp
public POSITION position

```

```cpp
public Point point

```



## Functions

### EdgeDistance

```cpp
public void EdgeDistance()
```


### EdgeDistance

```cpp
public void EdgeDistance(index_t edge_in, double distance_in, POSITION position_in, Point point_in)
```


### operator<

```cpp
public bool operator<(const EdgeDistance & other)
```




