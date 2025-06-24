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

# struct BackgroundPointIntersection


## Members

```cpp
public Point<dimension> point

```

```cpp
public optional background_vertex_id

```

```cpp
public optional edge_vertex_id

```

```cpp
public optional skin_element_id

```



## Functions

### BackgroundPointIntersection

```cpp
public void BackgroundPointIntersection<dimension>()
```


### operator==

```cpp
public bool operator==(const BackgroundPointIntersection<dimension> & other)
```


### operator<

```cpp
public bool operator<(const BackgroundPointIntersection<dimension> & other)
```




