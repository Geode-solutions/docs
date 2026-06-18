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

# class UniformSegmentSetSampler


```cpp
Inherits from ObjectSetSampler<OwnerSegment2D>
```



## Functions

### UniformSegmentSetSampler

```cpp
public void UniformSegmentSetSampler(const SpatialDomain<2> & domain, const ObjectSamplerConfig<OwnerSegment2D> & config)
```


### sample

```cpp
public OwnerSegment2D sample(RandomEngine & engine)
```


### change

```cpp
public OwnerSegment2D change(const OwnerSegment2D & obj, RandomEngine & engine)
```




