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

# struct PositiveStratigraphicTriangle


## Members

```cpp
public int indices_

```

```cpp
public OwnerTriangle2D positive_triangle_

```



## Functions

### PositiveStratigraphicTriangle

```cpp
public void PositiveStratigraphicTriangle()
```


### PositiveStratigraphicTriangle

```cpp
public void PositiveStratigraphicTriangle(const StratigraphicSection & model, const Surface2D & surface, index_t triangle_id)
```




