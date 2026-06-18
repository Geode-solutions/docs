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

# class UniformPointSetSampler


```cpp
Inherits from ObjectSetSampler<Point<3U> >
```



# class UniformPointSetSampler


```cpp
Inherits from ObjectSetSampler<Point<dimension> >
```



## Functions

### UniformPointSetSampler

```cpp
public void UniformPointSetSampler<dimension>(const SpatialDomain<dimension> & domain, const ObjectSamplerConfig<Point<dimension>> & config)
```


### sample

```cpp
public Point<dimension> sample(RandomEngine & engine)
```


### change

```cpp
public Point<dimension> change(const Point<dimension> & obj, RandomEngine & engine)
```




# class UniformPointSetSampler


```cpp
Inherits from ObjectSetSampler<Point<2U> >
```



