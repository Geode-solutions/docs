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

# class RandomEngine


## Functions

### RandomEngine

```cpp
public void RandomEngine(const RandomEngine & )
```


### operator=

```cpp
public RandomEngine & operator=(const RandomEngine & )
```


### RandomEngine

```cpp
public void RandomEngine(RandomEngine && )
```


### operator=

```cpp
public RandomEngine & operator=(RandomEngine && )
```


### RandomEngine

```cpp
public void RandomEngine()
```


### ~RandomEngine

```cpp
public void ~RandomEngine()
```


### set_seed

```cpp
public void set_seed(uint64_t number)
```


### set_seed

```cpp
public void set_seed(basic_string_view word)
```


### sample_uniform

```cpp
public Type sample_uniform(const UniformClosed<Type> & law)
```


### sample_uniform

```cpp
public Type sample_uniform(const UniformClosedOpen<Type> & law)
```


### sample_gaussian

```cpp
public double sample_gaussian(const Gaussian & law)
```


### sample_truncated_gaussian

```cpp
public double sample_truncated_gaussian(const TruncatedGaussian & law)
```


### sample_von_mises

```cpp
public double sample_von_mises(const VonMises & law)
```


### sample_truncated_lognormal

```cpp
public double sample_truncated_lognormal(const TruncatedLogNormal & law)
```


### sample_truncated_powerlaw

```cpp
public double sample_truncated_powerlaw(const TruncatedPowerLaw & law)
```


### sample_log

```cpp
public double sample_log()
```


### sample_bernoulli

```cpp
public bool sample_bernoulli(double probability_of_success)
```




