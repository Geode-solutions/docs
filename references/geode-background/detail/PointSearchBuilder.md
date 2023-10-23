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

# class PointSearchBuilder


## Functions

### PointSearchBuilder

```cpp
public void PointSearchBuilder<>(PointSearch<dimension> & point_search)
```


### build_vertex_tree

```cpp
public void build_vertex_tree(int points)
```


### build_vertex_tree

```cpp
public void build_vertex_tree(std::vector<Point<dimension> > points)
```



# class PointSearchBuilder

# class PointSearchBuilder

