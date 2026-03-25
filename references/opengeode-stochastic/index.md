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



## Namespaces

* [detail](detail/index.md)


## Records

* [BallSampler](BallSampler.md)
* [BoundingBoxSampler](BoundingBoxSampler.md)
* [DistributionTag](DistributionTag.md)
* [DistributionTypeHasher](DistributionTypeHasher.md)
* [DoubleSampler](DoubleSampler.md)
* [EnergyTerm](EnergyTerm.md)
* [EuclideanCutoffInteraction](EuclideanCutoffInteraction.md)
* [Gaussian](Gaussian.md)
* [IntensityTerm](IntensityTerm.md)
* [ObjectId](ObjectId.md)
* [ObjectNeighborhood](ObjectNeighborhood.md)
* [ObjectRef](ObjectRef.md)
* [ObjectSet](ObjectSet.md)
* [ObjectSets](ObjectSets.md)
* [PairwiseInteraction](PairwiseInteraction.md)
* [PointUniformSampler](PointUniformSampler.md)
* [RandomEngine](RandomEngine.md)
* [SegmentUniformSampler](SegmentUniformSampler.md)
* [SingleObjectTerm](SingleObjectTerm.md)
* [SpatialDomainChecker](SpatialDomainChecker.md)
* [SpatialDomain](SpatialDomain.md)
* [StochasticLibrary](StochasticLibrary.md)
* [TruncatedGaussian](TruncatedGaussian.md)
* [TruncatedLogNormal](TruncatedLogNormal.md)
* [TruncatedPowerLaw](TruncatedPowerLaw.md)
* [UniformClosedOpen](UniformClosedOpen.md)
* [UniformClosed](UniformClosed.md)
* [VonMises](VonMises.md)


## Functions

### object_bounding_box

```cpp
auto object_bounding_box(const Type & object)
```


### object_barycenter

```cpp
auto object_barycenter(const Type & object)
```




