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

# struct SwapingData


## Members

```cpp
public PolygonData data

```

```cpp
public PolygonData data_adj

```

```cpp
public double qnew

```

```cpp
public double qnew_adj

```



## Functions

### SwapingData

```cpp
public void SwapingData(PolygonData data_in, PolygonData data_adj_in, double qnew_in, double qnew_adj_in)
```




