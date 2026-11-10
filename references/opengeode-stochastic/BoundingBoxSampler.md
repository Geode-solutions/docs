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

# class BoundingBoxSampler


# class BoundingBoxSampler


## Functions

### BoundingBoxSampler

```cpp
public void BoundingBoxSampler<dimension>(const BoundingBox<dimension> & box)
```


### ~BoundingBoxSampler

```cpp
public void ~BoundingBoxSampler<dimension>()
```


### sample_uniform

```cpp
public Point<dimension> sample_uniform(RandomEngine & engine)
```




# class BoundingBoxSampler


# class BoundingBoxSampler


