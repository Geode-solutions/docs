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

# class BallSampler


# class BallSampler


## Functions

### BallSampler

```cpp
public void BallSampler<dimension>(const Sphere<dimension> & ball)
```


### ~BallSampler

```cpp
public void ~BallSampler<dimension>()
```


### sample_uniform

```cpp
public Point<dimension> sample_uniform(RandomEngine & engine)
```




# class BallSampler


