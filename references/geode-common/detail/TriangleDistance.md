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

# struct TriangleDistance


## Members

```cpp
public index_t id

```

```cpp
public double distance

```



## Functions

### TriangleDistance

```cpp
public void TriangleDistance(index_t id_in, double distance_in)
```


### operator<

```cpp
public bool operator<(const TriangleDistance & other)
```




