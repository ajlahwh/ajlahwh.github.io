---
layout: page
title: Projects
permalink: /projects/
display_title: Projects
---

# Research Projects

<table width="100%" style="border: 0px; ">
    <tr>
        <td>
            <center><img src="{{site.url}}/assets/publications/metarl.png" width="100%"/></center>
        </td>
        <td width="70%">
            <a href="" id="metarl" name="metarl"><b>What do meta-reinforcement learning networks learn in two-stage decision-making?</b></a><br />
            The striatum and prefrontal cortex (PFC) play critical roles in reinforcement learning (RL). The striatum implements a model-free RL algorithm by driving synaptic plasticity modulated by dopaminergic prediction errors. The PFC, in turn, is thought to implement a model-based algorithm through its neuronal dynamics. The role and interplay of both regions can be successfully modeled in the meta-RL framework, whereby a striatal model-free learning algorithm is used to adjust synaptic weights of the PFC network, enabling a free-standing learning algorithm through neuronal dynamics. However, it is unclear which free-standing learning algorithm emerges in PFC from the training procedure. To answer this question, we trained recurrent neural networks on the widely-studied two-stage task, in which two first-stage actions probabilistically lead to two rewarding second-stage states. We then analyzed networks’ representational geometry. We found that the networks acquired a representation with neural activity grouped by second-stage state and reward. In this space, points (i.e., neural activity on one trial) in each group formed curves. The relative location of points along these curves roughly corresponded to action probabilities. To elucidate mechanisms giving rise to these curves, we fit behavioral models to networks’ action probabilities, including model-free, reward-as-cue, model-based (MB), and latent-state (LS) algorithm families. The MB and LS families provided the best fits. Surprisingly, trial-by-trial choice probabilities predicted by the LS, but not the MB model, were consistent with networks’ action probabilities. Additionally, the more training the networks received, the more the networks sharpened their dynamics towards the LS representation. Our results demonstrate that the networks learned an augmented latent-state representation in the two-stage task. More generally, we offer a systematic approach for "opening the black box" of meta-RL agents, identifying emergent algorithms, and adjudicating model families (e.g., MB vs. LS) previously thought to be difficult to distinguish in animal experiments.  <br />
        </td>
    </tr>
	
    <tr>
        <td>
            <center><img src="{{site.url}}/assets/publications/qrl.png" width="100%"/></center>
        </td>
        <td width="70%">
            <a href="https://www.nature.com/articles/s41562-019-0804-2" id="qrl" name="qrl"><b>Quantum Reinforcement Learning during Human Decision Making</b></a><br />
            Classical reinforcement learning (CRL) has been widely applied in neuroscience and psychology; while quantum reinforcement learning (QRL), showing superior performance in computer simulations, has never been empirically tested on human decision making. Moreover, all current successful quantum models for human cognition lack connections to neuroscience. Here we studied whether QRL can properly explain value-based decision making. We compared two QRL and twelve CRL models based on behavioral and functional magnetic resonance imaging data from healthy and cigarette smoking subjects performing the Iowa Gambling Task. In all groups, the QRL models performed well compared with the best CRL models and further revealed the representation of quantum-like internal-state-related variables in the medial frontal gyrus in both healthy subjects and smokers, suggesting that value-based decision making can be illustrated by QRL at both the behavioral and the neural levels.  <br />
        </td>
    </tr>
    <tr>
        <td>
            <center><img src="{{site.url}}/assets/publications/cs.png" width="100%"/></center>
        </td>
        <td width="70%">
            <a href="https://www.biorxiv.org/content/10.1101/854059v2" id="cs" name="cs"><b>Face Familiarity Detection with Complex Synapses</b></a> <br />
            Synaptic plasticity is a complex phenomenon involving multiple biochemical processes that operate on different timescales. We recently showed that this complexity can greatly increase the memory capacity of neural networks when the variables that characterize the synaptic dynamics have limited precision, as in biological systems. These types of complex synapses have been tested mostly on simple memory retrieval problems involving random and uncorrelated patterns. Here we turn to a real-world problem, face familiarity detection, and we show that also in this case it is possible to take advantage of synaptic complexity to store in memory a large number of faces that can be recognized at a later time. In particular, we show that the familiarity memory capacity of a system with complex synapses grows almost linearly with the number of the synapses and quadratically with the number of neurons. Complex synapses are superior to simple ones, which are characterized by a single variable, even when the total number of dynamical variables is matched. We further show that complex and simple synapses have distinct signatures that are testable in proposed experiments. Our results indicate that a memory system with complex synapses can be used in real-world tasks such as face familiarity detection.   <br />
        </td>
    </tr>
    <tr>
        <td>
            <center><img src="{{site.url}}/assets/publications/conv.png" width="100%"/></center>
        </td>
        <td width="70%">
            <a href="https://www.biorxiv.org/content/10.1101/680439v1" id="conv" name="conv"><b>Understanding the Functional and Structural Differences across Excitatory and Inhibitory Neurons</b></a> <br />
            One of the most fundamental organizational principles of the brain is the separation of excitatory (E) and inhibitory (I) neurons. In addition to their opposing effects on post-synaptic neurons, E and I cells tend to differ in their selectivity and connectivity. Although many such differences have been characterized experimentally, it is not clear why they exist in the first place. We studied this question in deep networks equipped with E and I cells. We found that salient distinctions between E and I neurons emerge across various deep convolutional recurrent networks trained to perform standard object classification tasks, and explored the necessary conditions for the networks to develop distinct selectivity and connectivity across cell types. We found that neurons that project to higher-order areas will have greater stimulus selectivity, regardless of whether they are excitatory or not. Sparser connectivity is required for higher selectivity, but only when the recurrent connections are excitatory. These findings demonstrate that the functional and structural differences observed across E and I neurons are not independent, and can be explained using a smaller number of factors.  <br />
        </td>
    </tr>
    <tr>
        <td>
            <center><img src="{{site.url}}/assets/publications/rnn.png" width="100%"/></center>
        </td>
        <td width="70%">
            <a href="" id="rnn" name="rnn"><b>The Mechanisms of Recurrent Neural Networks with Interneurons and Dendrites Performing Context-Dependent Decision Making</b></a> <br />
            Recurrent neural network (RNN) training has been a useful tool for studying neural computation mechanisms crucial for cognition and behavior. However, most existing RNN models do not take into account the many different cell types in the brain, and ignore the subcellular information processing within neurons. RNN models that did take into account distinct cell types only focused on distinguishing excitatory and inhibitory neurons (Dale’s principle). Here, we trained RNNs with excitatory neurons and three types of inhibitory neurons to mimic multi-compartmental pyramidal cells and parvalbumin (PV)-expressing, somatostatin (SST)-expressing and vasoactive intestinal peptide (VIP)-expressing interneurons in the real cortical circuits. The broad connectivity pattern across all populations was specified based on experimental findings, while the detailed connection weights are trained with stochastic gradient descent. We studied the neural mechanisms of such networks performing a generalized version of a context-dependent decision-making task (the Mante task). Our results showed that after training, dendrites of excitatory neurons became selective for sensory inputs. Meanwhile, inhibitory neurons developed selectivity for contextual control signals, allowing them to inhibit and disinhibit dendrites of excitatory neurons to perform the task. We also found that when there are more dendrites for pyramidal neurons, the networks prefer to gate sensory inputs on dendrites rather than on somas of excitatory neurons. These results indicate that the interaction between inhibitory neurons and multi-compartmental excitatory neurons can support flexible context-dependent cognitive functions by inhibition, disinhibition and gating. This study can provide a basis for studying computational mechanisms of multi-cell-type RNNs and shed light on how function is related to broad connectivity in those networks.  <br />
        </td>
    </tr>
</table>
