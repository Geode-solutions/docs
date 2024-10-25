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

# struct ColocatedInfo


## Members

```cpp
public std::vector<Point<dimension> > unique_points

```

```cpp
public vector colocated_mapping

```

```cpp
public vector colocated_input_points

```



## Functions

### ColocatedInfo

```cpp
public void ColocatedInfo()
```


### nb_unique_points

```cpp
public index_t nb_unique_points()
```


### nb_colocated_points

```cpp
public index_t nb_colocated_points()
```




