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

# namespace geode



## Records

* [BallSampler](BallSampler.md)
* [BoundingBoxSampler](BoundingBoxSampler.md)
* [DoubleSampler](DoubleSampler.md)
* [Gaussian](Gaussian.md)
* [PointUniformSampler](PointUniformSampler.md)
* [RandomEngine](RandomEngine.md)
* [StochasticLibrary](StochasticLibrary.md)
* [TruncatedGaussian](TruncatedGaussian.md)
* [UniformClosedOpen](UniformClosedOpen.md)
* [UniformClosed](UniformClosed.md)


## Functions

### hello_world

```cpp
bool hello_world()
```




