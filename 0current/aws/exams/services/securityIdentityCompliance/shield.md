# Shield

- managed DDoS protection

## my thoughts

## links

- [landing page](https://aws.amazon.com/shield/?did=ap_card&trk=ap_card)
- [best practices pdf](https://d0.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf)

## best practices

### anti patterns

## features

- automatically detect and mitigate network level distributed DDoS events
- integrate with Shield Respnse Team (SRT) protocol or WAF
- scrub bad traffic at specific layers: APIs from SYN floods, UDP floods, or other reflection attacks
- Deploy inline mitigations such as deterministic packet filtering and priority-based traffic shaping to stop basic network-layer attacks.
- Activate automatic detection, mitigation, or protection for up to 1,000 resource types per AWS account.

### pricing

- two tiers
  - standard: no additional charge
  - advanced:
    - enterprise/business level support plan is required
    - 1 year advanced plan played charged monthly

## basics

### standard

- automatically enabled to all AWS customers
- provides
  - always-on detection: network flow monitoring inspects incoming traffic to AWS; uses a combination of traffic signatures, anomaly algorithms, and other analysis techniques to detect malicious traffic in real time.
  - automatic inline mitigation and protection of layer 3 and 4 so there is no latency to your applications

### advanced

- additional protections for internet-facing applications running on Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Amazon Route 53
- provides everything in standard plus
  - expanded DDoS protection
  - 24/7 DDoS response team
  - cost protection for DDoS spikes in Amazon Elastic Compute Cloud (Amazon EC2), ELB, CloudFront, or Route 53 charges
  - access to real time reports

## considerations

## integrations
