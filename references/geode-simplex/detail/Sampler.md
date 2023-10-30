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

# class Sampler


## Records

ElementPoint



## Functions

### ~Sampler

```cpp
public void ~Sampler<Element>()
```


### sample

```cpp
public int sample()
```


### Sampler

```cpp
protected void Sampler<Element>(const Metric3D & metric)
```


### add_point_to_cells

```cpp
protected void add_point_to_cells(const Point3D & point)
```




