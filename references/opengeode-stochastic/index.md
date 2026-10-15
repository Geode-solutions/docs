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
* [BirthDeathMove](BirthDeathMove.md)
* [BoundingBoxSampler](BoundingBoxSampler.md)
* [CenterEuclideanDistanceCutoff](CenterEuclideanDistanceCutoff.md)
* [ChangeMove](ChangeMove.md)
* [DistributionTag](DistributionTag.md)
* [DistributionTypeHasher](DistributionTypeHasher.md)
* [DoubleSampler](DoubleSampler.md)
* [EnergyTermCollection](EnergyTermCollection.md)
* [EnergyTerm](EnergyTerm.md)
* [EuclideanDistanceCutoffConfig](EuclideanDistanceCutoffConfig.md)
* [FractureProcessBuilder](FractureProcessBuilder.md)
* [Gaussian](Gaussian.md)
* [GibbsEnergy](GibbsEnergy.md)
* [MetropolisHastings](MetropolisHastings.md)
* [MinimalDistanceCutoffConfig](MinimalDistanceCutoffConfig.md)
* [MinimalDistanceCutoff](MinimalDistanceCutoff.md)
* [ModelConfig](ModelConfig.md)
* [Model](Model.md)
* [MoveResult](MoveResult.md)
* [Move](Move.md)
* [ObjectId](ObjectId.md)
* [ObjectInDomainFeatureConfig](ObjectInDomainFeatureConfig.md)
* [ObjectInDomainFeature](ObjectInDomainFeature.md)
* [ObjectNeighborhood](ObjectNeighborhood.md)
* [ObjectRef](ObjectRef.md)
* [ObjectSamplerConfig](ObjectSamplerConfig.md)
* [ObjectSetDefinition](ObjectSetDefinition.md)
* [ObjectSetDynamicsConfig](ObjectSetDynamicsConfig.md)
* [ObjectSetSampler](ObjectSetSampler.md)
* [ObjectSet](ObjectSet.md)
* [ObjectSets](ObjectSets.md)
* [OpenGeodeStochasticException](OpenGeodeStochasticException.md)
* [OpenGeodeStochasticStochasticException](OpenGeodeStochasticStochasticException.md)
* [OpenGeodeStochasticStochasticLibrary](OpenGeodeStochasticStochasticLibrary.md)
* [PairwiseInteraction](PairwiseInteraction.md)
* [PairwiseTermConfig](PairwiseTermConfig.md)
* [PairwiseTerm](PairwiseTerm.md)
* [PointUniformSampler](PointUniformSampler.md)
* [PoissonProcessBuilder](PoissonProcessBuilder.md)
* [ProposalKernel](ProposalKernel.md)
* [ProposalProbabilities](ProposalProbabilities.md)
* [Proposal](Proposal.md)
* [RandomEngine](RandomEngine.md)
* [SegmentLengthInsideBoxFeatureConfig](SegmentLengthInsideBoxFeatureConfig.md)
* [SegmentLengthInsideBoxFeature](SegmentLengthInsideBoxFeature.md)
* [SegmentUniformSampler](SegmentUniformSampler.md)
* [SimulationConfigurator](SimulationConfigurator.md)
* [SimulationContextConfig](SimulationContextConfig.md)
* [SimulationContext](SimulationContext.md)
* [SimulationPrinterConfigurator](SimulationPrinterConfigurator.md)
* [SimulationPrinter](SimulationPrinter.md)
* [SimulationRunner](SimulationRunner.md)
* [SingleObjectFeature](SingleObjectFeature.md)
* [SingleObjectTermConfig](SingleObjectTermConfig.md)
* [SingleObjectTerm](SingleObjectTerm.md)
* [SpatialDomainChecker](SpatialDomainChecker.md)
* [SpatialDomainConfig](SpatialDomainConfig.md)
* [SpatialDomain](SpatialDomain.md)
* [StatisticsTracker](StatisticsTracker.md)
* [StepResult](StepResult.md)
* [StraussProcessBuilder](StraussProcessBuilder.md)
* [TargetStatisticConfig](TargetStatisticConfig.md)
* [TargetStatistics](TargetStatistics.md)
* [TruncatedGaussian](TruncatedGaussian.md)
* [TruncatedLogNormal](TruncatedLogNormal.md)
* [TruncatedPowerLaw](TruncatedPowerLaw.md)
* [UniformClosedOpen](UniformClosedOpen.md)
* [UniformClosed](UniformClosed.md)
* [UniformPointSetSampler](UniformPointSetSampler.md)
* [UniformSegmentSetSampler](UniformSegmentSetSampler.md)
* [VonMises](VonMises.md)
* [uuid](uuid.md)


## Functions

### build_pairwise_interaction_impl

```cpp
std::unique_ptr<PairwiseInteraction<ObjectType>> build_pairwise_interaction_impl(const EuclideanDistanceCutoffConfig & cfg)
```


### add_birth_death_change_moves

```cpp
void add_birth_death_change_moves(const geode::ObjectSetSampler<ObjectType> & sampler, geode::ProposalKernel<ObjectType> & kernel, const uuid & set_id, double birth_ratio, double death_ratio, double change_ratio)
```


### build_objectset_sampler

```cpp
std::unique_ptr<ObjectSetSampler<ObjectType>> build_objectset_sampler(const SpatialDomain<ObjectType::dim> & domain, const ObjectSamplerConfig<ObjectType> & config)
```

### build_single_object_feature_impl

```cpp
std::unique_ptr<SingleObjectFeature<ObjectType>> build_single_object_feature_impl(const ObjectInDomainFeatureConfig & cfg)
```


### build_pairwise_interaction_impl

```cpp
std::unique_ptr<PairwiseInteraction<ObjectType>> build_pairwise_interaction_impl(const MinimalDistanceCutoffConfig & cfg)
```


### object_bounding_box

```cpp
auto object_bounding_box(const Type & object)
```


### build_single_object_feature_impl

```cpp
std::unique_ptr<SingleObjectFeature<ObjectType>> build_single_object_feature_impl(const SegmentLengthInsideBoxFeatureConfig & cfg)
```


### build_pairwise_interaction_impl

```cpp
std::unique_ptr<PairwiseInteraction<ObjectType>> build_pairwise_interaction_impl(const NewInteractionConfig & )
```


### build_single_term

```cpp
std::unique_ptr<EnergyTerm<ObjectType>> build_single_term(const SingleObjectTermConfig & cfg, const ObjectSets<ObjectType> & object_sets, const SpatialDomain<ObjectType::dim> & domain)
```


### build_pairwise_interaction_impl

```cpp
std::unique_ptr<PairwiseInteraction<ObjectType>> build_pairwise_interaction_impl(const std::monostate & )
```


### create_birth_death_kernel

```cpp
std::unique_ptr<ProposalKernel<ObjectType>> create_birth_death_kernel(const uuid & set_id, const ObjectSetSampler<ObjectType> & sampler, double birth_prob)
```


### object_barycenter

```cpp
auto object_barycenter(const Type & object)
```


### build_single_object_feature_impl

```cpp
std::unique_ptr<SingleObjectFeature<ObjectType>> build_single_object_feature_impl(const NewObjectFeatureConfig & )
```


### pairwise_builder_initialize_interactions_helper

```cpp
std::pair<std::vector<uuid>, absl::flat_hash_map<uuid, std::vector<uuid>>> pairwise_builder_initialize_interactions_helper(const std::vector<std::pair<uuid, uuid>> & interacting_sets)
```


### build_pairwise_interaction

```cpp
std::unique_ptr<PairwiseInteraction<ObjectType>> build_pairwise_interaction(const PairwiseInteractionConfig & cfg)
```


### build_single_object_feature_impl

```cpp
std::unique_ptr<SingleObjectFeature<ObjectType>> build_single_object_feature_impl(const std::monostate & )
```


### build_pairwise_term

```cpp
std::unique_ptr<EnergyTerm<ObjectType>> build_pairwise_term(const PairwiseTermConfig & cfg, const ObjectSets<ObjectType> & object_sets, const SpatialDomain<ObjectType::dim> & domain)
```


### create_birth_death_change_kernel

```cpp
std::unique_ptr<ProposalKernel<ObjectType>> create_birth_death_change_kernel(const uuid & set_id, const ObjectSetSampler<ObjectType> & sampler, double birth_prob, double death_prob)
```


### build_single_object_feature

```cpp
std::unique_ptr<SingleObjectFeature<ObjectType>> build_single_object_feature(const SingleObjectFeatureConfig & cfg)
```


### check_model_integrability

```cpp
void check_model_integrability(const ModelConfig & config)
```


 Throws if the model is not well defined (not integrable): an attractive pairwise term (gamma > 1) requires each of its object sets to have an intra-set hard-core (gamma = 0) at a strictly positive distance.

### build_energy_term_impl

```cpp
std::unique_ptr<EnergyTerm<ObjectType>> build_energy_term_impl(const SingleObjectTermConfig & cfg, const ObjectSets<ObjectType> & object_sets, const SpatialDomain<ObjectType::dim> & domain)
```


### build_energy_term_impl

```cpp
std::unique_ptr<EnergyTerm<ObjectType>> build_energy_term_impl(const PairwiseTermConfig & cfg, const ObjectSets<ObjectType> & object_sets, const SpatialDomain<ObjectType::dim> & domain)
```


### build_simulation_context

```cpp
geode::SimulationContext<ObjectType> build_simulation_context(const SimulationContextConfig<ObjectType> & config)
```


### build_objectset_sampler

```cpp
std::unique_ptr<ObjectSetSampler<Point2D>> build_objectset_sampler(const SpatialDomain<2> & domain, const ObjectSamplerConfig<Point2D> & config)
```


### build_energy_term_impl

```cpp
std::unique_ptr<EnergyTerm<ObjectType>> build_energy_term_impl(const NewEnergyTypeConfig & , const ObjectSets<ObjectType> & , const SpatialDomain<ObjectType::dim> & )
```


### build_objectset_sampler

```cpp
std::unique_ptr<ObjectSetSampler<Point3D>> build_objectset_sampler(const SpatialDomain<3> & domain, const ObjectSamplerConfig<Point3D> & config)
```


### build_energy_term_impl

```cpp
std::unique_ptr<EnergyTerm<ObjectType>> build_energy_term_impl(const std::monostate & , const ObjectSets<ObjectType> & , const SpatialDomain<ObjectType::dim> & )
```


### build_energy_term

```cpp
std::unique_ptr<EnergyTerm<ObjectType>> build_energy_term(const EnergyTermConfig & cfg, const ObjectSets<ObjectType> & object_sets, const SpatialDomain<ObjectType::dim> & domain)
```


### build_spatial_domain

```cpp
std::unique_ptr<SpatialDomain<dimension>> build_spatial_domain(const SpatialDomainConfig<dimension> & config)
```


### build_model

```cpp
std::unique_ptr<Model<ObjectType>> build_model(const ModelConfig & config, const ObjectSets<ObjectType> & object_sets, const SpatialDomain<ObjectType::dim> & domain)
```


### build_objectset_sampler

```cpp
std::unique_ptr<ObjectSetSampler<OwnerSegment2D>> build_objectset_sampler(const SpatialDomain<2> & domain, const ObjectSamplerConfig<OwnerSegment2D> & config)
```




## Enums

| enum class MOVE_TYPE |

--

| invalid |
| birth |
| death |
| change |



| enum class MH_DECISION |

--

| accepted |
| rejected |
| undecided |





