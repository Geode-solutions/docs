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

# struct LineRemesherOutput


## Members

```cpp
public uuid background_id

```

```cpp
public uuid output_id

```

```cpp
public PointsInfo points

```



## Functions

### LineRemesherOutput

```cpp
public void LineRemesherOutput<dimension>(uuid background_id_in, uuid output_id_in)
```


### add_point

```cpp
public void add_point(const EdgedCurve<dimension> & mesh, index_t edge, Point<dimension> point, index_t remeshed_vertex)
```




# struct LineRemesherOutput


## Members

```cpp
public uuid background_id

```

```cpp
public uuid output_id

```

```cpp
public flat_hash_map points

```



# struct LineRemesherOutput


## Members

```cpp
public uuid background_id

```

```cpp
public uuid output_id

```

```cpp
public flat_hash_map points

```



