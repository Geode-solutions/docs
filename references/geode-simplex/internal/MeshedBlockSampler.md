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

# class MeshedBlockSampler


```cpp
Inherits from BlockSampler
```



## Functions

### MeshedBlockSampler

```cpp
public void MeshedBlockSampler(const MeshedBlockSampler & )
```


### operator=

```cpp
public MeshedBlockSampler & operator=(const MeshedBlockSampler & )
```


### MeshedBlockSampler

```cpp
public void MeshedBlockSampler(MeshedBlockSampler && )
```


### operator=

```cpp
public MeshedBlockSampler & operator=(MeshedBlockSampler && )
```


### ~MeshedBlockSampler

```cpp
public void ~MeshedBlockSampler()
```


### MeshedBlockSampler

```cpp
protected void MeshedBlockSampler(BRepSamplingData & data, const Block3D & block)
```


### initial_queue_elements

```cpp
protected vector initial_queue_elements()
```


### compute_potential_points

```cpp
protected tuple compute_potential_points(const Element & element)
```




