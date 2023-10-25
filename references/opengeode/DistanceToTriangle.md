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

# class DistanceToTriangle


# class DistanceToTriangle


## Functions

### DistanceToTriangle

```cpp
public void DistanceToTriangle<dimension>(const TriangulatedSurface<dimension> & mesh)
```


### operator()

```cpp
public std::tuple<double, Point<dimension> > operator()(const Point<dimension> & query, index_t cur_box)
```




# class DistanceToTriangle


